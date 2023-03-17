CREATE PROCEDURE [performance].[sp_fetchAllStudents]
AS
BEGIN
	SELECT RollNo,FirstName,LastName,Email,Gender,Contact
	FROM performance.student
END
GO