import sqlite3

# Connect to the database (it will create the file if it doesn't exist)
conn = sqlite3.connect('database.db')

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Create tables and insert values

# Create 'users' table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255),
    password VARCHAR(255),
    userid INT PRIMARY KEY,
    auth_token VARCHAR(255),
    picture VARCHAR(255)
)
''')

cursor.execute('''
INSERT INTO users (email, password, userid, auth_token, picture)
VALUES 
('user1@example.com', 'password1', 1, '100000', 'src/assets/profilePicture/user.png'),
('user2@example.com', 'password2', 2, '010000', 'src/assets/profilePicture/user.png'),
('user3@example.com', 'password3', 3, '001000', 'src/assets/profilePicture/user.png'),
('user4@example.com', 'password4', 4, '000100', 'src/assets/profilePicture/user.png'),
('user5@example.com', 'password5', 5, '000010', 'src/assets/profilePicture/user.png')
''')

# Create 'profile' table
cursor.execute('''
CREATE TABLE IF NOT EXISTS profile (
    userid INT,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    email VARCHAR(255),
    gender VARCHAR(10),
    DOB DATE,
    fatherName VARCHAR(100),
    motherName VARCHAR(100),
    linkedin VARCHAR(255)
)
''')

cursor.execute('''
INSERT INTO profile (userid, email, firstName, lastName, gender, DOB, fatherName, motherName, linkedin)
VALUES 
(1, 'user1@example.com', 'Bellana', 'Yaswanth', 'Male', '2004-05-07', 'B Krishnarao', 'B Kusuma', 'linkedin.com/in/yaswanth'),
(2, 'user2@example.com', 'Bandaru', 'Sasikala', 'Female', '2005-03-09', 'B Sagar', 'B Soniya', 'linkedin.com/in/bsasi'),
(3, 'user3@example.com', 'Simhadri', 'Akshaya', 'Female', '2004-03-03', 'S Arjun', 'S Rakul', 'linkedin.com/in/akhi'),
(4, 'user4@example.com', 'Tenneri', 'Rahul', 'Male', '1999-04-04', 'T Thomus', 'T Samantha', 'linkedin.com/in/tennerirahul09'),
(5, 'user5@example.com', 'Anduluri', 'Rakesh', 'Male', '2001-05-05', 'A Ram', 'A Anupama', 'linkedin.com/in/rakesh2001')
''')

# Create 'address' table
cursor.execute('''
CREATE TABLE IF NOT EXISTS address (
    userid INT,
    addressline1 VARCHAR(255),
    addressline2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    pincode VARCHAR(20)
)
''')

cursor.execute('''
INSERT INTO address (userid, addressline1, addressline2, city, state, country, pincode)
VALUES 
(1, '123 Main St', 'Apt 101', 'Hyderabad', 'Telangana', 'India', '507116'),
(2, '456 Oak Rd', 'Apt 202', 'Vishakapatnam', 'Andhra Pradesh', 'India', '98765'),
(3, '789 Pine Ave', 'Suite 303', 'Kochi', 'Kerala', 'India', '60230'),
(4, '101 Maple Dr', 'Apt 404', 'Chennai', 'Tamil Nadu', 'India', '741235'),
(5, '202 Birch Ln', 'Suite 505', 'Kolkata', 'West Bengal', 'India', '85801')
''')

# Create 'education' table
cursor.execute('''
CREATE TABLE IF NOT EXISTS education (
    userid INT,
    college VARCHAR(255),
    branch VARCHAR(100),
    collegestate VARCHAR(100)
)
''')

cursor.execute('''
INSERT INTO education (userid, college, branch, collegestate)
VALUES 
(1, 'IIIT Kalyani', 'Computer Science', 'West Bengal'),
(2, 'IIT Kanpur', 'Electrical Engineering', 'Uttar Pradesh'),
(3, 'IIT Madras', 'Mechanical Engineering', 'Tamil Nadu'),
(4, 'NIT Trichy', 'Civil Engineering', 'Tamil Nadu'),
(5, 'University of Amaravati', 'Chemical Engineering', 'Andhra Pradesh')
''')

# Create 'stats' table
cursor.execute('''
CREATE TABLE IF NOT EXISTS stats (
    userid INT,
    ratings DECIMAL(3,2),
    coursecomplete INT
)
''')

cursor.execute('''
INSERT INTO stats (userid, ratings, coursecomplete)
VALUES 
(1, 4, 97),
(2, 3, 80),
(3, 4, 12),
(4, 3, 57),
(5, 4, 71)
''')

# Create 'jobapply' table
cursor.execute('''
CREATE TABLE IF NOT EXISTS jobapply (
    jobid INT PRIMARY KEY,
    role VARCHAR(100),
    statusApplication VARCHAR(50),
    salary DECIMAL(10,2),
    duration INT,
    type VARCHAR(50)
)
''')

cursor.execute('''
INSERT INTO jobapply (jobid, role, statusApplication, salary, duration, type)
VALUES 
(101, 'Software Engineer', 'Open', 70000, 3, 'Internship'),
(102, 'Data Scientist', 'Close', 80000, 24, 'Full-time'),
(103, 'Product Manager', 'Open', 90000, 18, 'Contract'),
(104, 'Graphic Designer', 'Open', 50000, 6, 'Freelance'),
(105, 'Project Manager', 'Open', 85000, 12, 'Full-time')
''')

# Create 'jobpost' table
cursor.execute('''
CREATE TABLE IF NOT EXISTS jobpost (
    jobid INT PRIMARY KEY,
    hrname VARCHAR(100),
    company VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255)
)
''')

cursor.execute('''
INSERT INTO jobpost (jobid, hrname, company, phone, email)
VALUES 
(101, 'Sarah Lee', 'Tech Corp', '123-456-7890', 'sarah@techcorp.com'),
(102, 'David Smith', 'Data Solutions', '234-567-8901', 'david@datasolutions.com'),
(103, 'Emily Davis', 'Innovate Inc.', '345-678-9012', 'emily@innovate.com'),
(104, 'Michael Johnson', 'Design Studio', '456-789-0123', 'michael@designstudio.com'),
(105, 'Rachel Brown', 'ProjectWorks', '567-890-1234', 'rachel@projectworks.com')
''')

# Create 'newRegistration' table
cursor.execute('''
CREATE TABLE IF NOT EXISTS newRegistration (
    studentname VARCHAR(100),
    fathername VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(255)
)
''')

cursor.execute('''
INSERT INTO newRegistration (studentname, fathername, phone, email)
VALUES 
('John Doe', 'Robert Doe', '123-456-7890', 'john@example.com'),
('Jane Smith', 'Michael Smith', '234-567-8901', 'jane@example.com'),
('Alice Johnson', 'David Johnson', '345-678-9012', 'alice@example.com'),
('Bob Brown', 'William Brown', '456-789-0123', 'bob@example.com'),
('Charlie Davis', 'Thomas Davis', '567-890-1234', 'charlie@example.com')
''')

# Commit the transaction
conn.commit()

# Retrieve and print all records from 'users' as an example
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)

# Close the connection
conn.close()
