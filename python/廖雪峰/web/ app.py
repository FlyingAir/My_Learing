from flask import Flask,url_for,render_template
app = Flask(__name__)

@app.route('/hello/<name>')
def hello(name=None):
    return render_template('index.html', name=name)
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        do_the_login()
    else:
        show_the_login_form()

if __name__ == '__main__':
    app.run()