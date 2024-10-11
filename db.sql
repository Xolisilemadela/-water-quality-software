-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    user_type ENUM('student', 'professional') NOT NULL
);

-- Insert sample users (optional)
INSERT INTO users (username, email, password, user_type) 
VALUES 
('John Doe', 'johndoe@gmail.com', 'password123', 'student'),
('Jane Doe', 'janedoe@gmail.com', 'password456', 'professional');
