CREATE TABLE users (
  userid INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL UNIQUE,
  firstname VARCHAR(20) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  email VARCHAR(40) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE questions (
  id INT AUTO_INCREMENT,
  questionid VARCHAR(100) UNIQUE,
  userid INT,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(200) NOT NULL,
  tag VARCHAR(29),
  PRIMARY KEY (id, questionid),
  FOREIGN KEY (userid) REFERENCES users(userid)
);

CREATE TABLE answers (
  answerid INT AUTO_INCREMENT,
  userid INT,
  questionid VARCHAR(100),
  answer VARCHAR(200) NOT NULL,
  PRIMARY KEY (answerid, userid),
  FOREIGN KEY (userid) REFERENCES users(userid),
  FOREIGN KEY (questionid) REFERENCES questions(questionid)
);
