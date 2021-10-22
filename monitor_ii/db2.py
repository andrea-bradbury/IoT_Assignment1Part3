import sqlite3

class Database:
    def __init__(self, filename, table_name="cpu_loads"):
        self.__filename = filename
        self.__table_name = table_name

    def __execute(self, query):
        ''' Convenience method that opens connection,
        retrieves a cursor, executes a query,
        then closes the connection.
        Should not be used for queries that fetch data.

        '''

        connection = sqlite3.connect(self.__filename)
        cursor = connection.cursor()
        cursor.execute(query)
        connection.commit()
        connection.close()

    def create(self):
        '''
        Method that creates database table if it does not already exists.
        '''

        query = f'CREATE TABLE IF NOT EXISTS {self.__table_name} ('\
                '[id] INTEGER PRIMARY KEY,' \
                '[load] DECIMAL,' \
                '[created_at] DATETIME)'
        self.__execute(query)

    def store(self, value):
        '''
        Method that stores a single data value into the table.
        '''
        query = f'INSERT INTO {self.__table_name} VALUES ('\
                f'null, {value}, datetime())'

        self.__execute(query)

