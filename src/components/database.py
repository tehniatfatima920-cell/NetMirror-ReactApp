from flask import Flask, request, redirect, url_for, render_template_string
import sqlite3

app = Flask(__name__)

class StudentDatabase:
    def __init__(self):
        self.connection = sqlite3.connect("students.db", check_same_thread=False)
        self.cursor = self.connection.cursor()
        self.create_table()

    def create_table(self):
        self.cursor.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            age INTEGER NOT NULL
        )
        """)
        self.connection.commit()

    def add_student(self, name, email, age):
        try:
            self.cursor.execute(
                "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
                (name, email, age)
            )
            self.connection.commit()
            return "Student added successfully"
        except sqlite3.IntegrityError:
            return "Email already exists"

    def get_students(self):
        self.cursor.execute("SELECT * FROM students")
        return self.cursor.fetchall()

db = StudentDatabase()

HTML = """
<!DOCTYPE html>
<html>
<head>
    <title>Student Database</title>
</head>
<body>
    <h2>Add Student</h2>
    <form method="POST">
        Name: <input name="name" required><br><br>
        Email: <input name="email" required><br><br>
        Age: <input name="age" type="number" required><br><br>
        <button type="submit">Add Student</button>
    </form>

    <h2>{{ message }}</h2>

    <h2>All Students</h2>
    <ul>
        {% for s in students %}
            <li>{{ s[1] }} | {{ s[2] }} | {{ s[3] }}</li>
        {% endfor %}
    </ul>
</body>
</html>
"""

@app.route("/", methods=["GET", "POST"])
def index():
    message = ""
    if request.method == "POST":
        message = db.add_student(
            request.form["name"],
            request.form["email"],
            request.form["age"]
        )

    students = db.get_students()
    return render_template_string(HTML, students=students, message=message)

if __name__ == "__main__":
    app.run(debug=True)
