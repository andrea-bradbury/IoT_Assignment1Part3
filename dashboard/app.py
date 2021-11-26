from flask import Flask, render_template
from db import Database

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/cpu')
def chart_cpu():
    return render_template('chart-cpu.html')


@app.route('/history')
def history():
    return render_template('history.html')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int("5000"), debug=True)
