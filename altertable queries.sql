ALTER TABLE performance.parent ADD 
CreatedAt DATETIME DEFAULT GETDATE(),
EditedAt DATETIME DEFAULT GETDATE(),
ActiveYN bit DEFAULT 1

ALTER TABLE performance.category
ADD PRIMARY KEY (CategoryID)

ALTER TABLE performance.teacher
ADD PRIMARY KEY (TeacherID)

ALTER TABLE performance.student
ADD PRIMARY KEY (RollNo)

ALTER TABLE performance.parent
ADD PRIMARY KEY (ParentID)

ALTER TABLE performance.parameter
ADD PRIMARY KEY (ParameterID)

ALTER TABLE performance.parent
ADD division varchar(50)

ALTER TABLE performance.parent
ALTER COLUMN rollNo int

ALTER TABLE performance.parent
ALTER COLUMN password nvarchar(max)

ALTER TABLE performance.teacher
ALTER COLUMN password nvarchar(max)

ALTER TABLE performance.teacher
ADD  tokenID nvarchar(max),
timeofExpiration datetime

ALTER TABLE performance.parent
ADD  tokenID nvarchar(max),
timeofExpiration datetime

DROP TABLE performance.rating;

ALTER TABLE performance.rating
ADD rollNo varchar(100)


ALTER TABLE performance.rating
DROP COLUMN studentID 
