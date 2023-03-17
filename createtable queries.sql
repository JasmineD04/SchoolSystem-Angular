CREATE TABLE performance.parent
(
	ParentID int IDENTITY(1,1),
	FirstName varchar(500),
	LastName varchar(500),
	UserName varchar(500),
	Email varchar(500),
	RollNo varchar(500),
	Password varchar(500)
)

CREATE TABLE performance.teacher
(
  	TeacherID int IDENTITY (1,1),
	  FirstName varchar(500),
	  LastName varchar(500),
	  UserName varchar(500),
	  Email varchar(500),
	  Division varchar(500),
    Gender varchar(500),
	  Password varchar(500),
    CreatedAt DATETIME DEFAULT GETDATE(),
	  EditedAt DATETIME DEFAULT GETDATE(),
	  ActiveYN bit DEFAULT 1
)

CREATE TABLE performance.student
(
  RollNo int IDENTITY(1,1),
  FirstName varchar(500),
	LastName varchar(500),
	UserName varchar(500),
	Email varchar(500),
  CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
	ActiveYN bit DEFAULT 1

)

CREATE TABLE performance.category
(
  CategoryID int IDENTITY(1,1),
  CategoryName varchar(500),
  CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
  ActiveYN bit DEFAULT 1


)

CREATE TABLE performance.parameter
(
  ParameterID int IDENTITY(1,1),
  ParameterName varchar(500),
  CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
  CategoryID int FOREIGN KEY REFERENCES performance.category(CategoryID),
  ActiveYN bit DEFAULT 1

)

CREATE TABLE performance.rating
(
  RatingID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
  Rating int,
  TeacherID int FOREIGN KEY REFERENCES performance.teacher(TeacherID),
  ParemeterID int FOREIGN KEY REFERENCES performance.parameter(ParameterID),
  CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
)

