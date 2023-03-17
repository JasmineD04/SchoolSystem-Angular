ALTER PROCEDURE [performance].[sp_insertFinalRating]
	@categoryID int,
	@rating int,
	--@studentID int,
	@teacherID int


AS
--DECLARE @finalData int
BEGIN
	
	UPDATE performance.ratingData
	SET finalData+=@rating
	WHERE CategoryID=@categoryID
	--AND StudentID=@studentID 
	AND TeacherID=@teacherID
	INSERT INTO [performance].[ratingData]
	--[TeacherID]
	--,[CategoryID]
	([finalData]
	--,[StudentID]
	)
	VALUES (
	@finalData
	--,@studentID
	)
	WHERE CategoryID=@categoryID
	--AND StudentID=@studentID 
	AND TeacherID=@teacherID

		

END
GO

EXEC performance.sp_insertFinalRating 1,5,1