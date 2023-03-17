USE [PerformanceAnalysis]
GO

/****** Object:  StoredProcedure [performance].[sp_insertFinalRating]    Script Date: 3/3/2023 11:02:50 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [performance].[sp_insertFinalRating]
	--@teacherID int,
	@categoryID int,
	@studentID int,
	@rating int


AS
DECLARE @count int
BEGIN
SELECT @count=COUNT(5)
	from performance.ratingData 
	WHERE StudentID=@studentID 
	AND CategoryID=@categoryID
	IF(@count>0)
		BEGIN
			UPDATE performance.ratingData
			SET finalData+=@rating
			WHERE CategoryID=@categoryID
			AND StudentID=@studentID
		END
	ELSE
		BEGIN
			INSERT INTO performance.ratingData
			([finalData]
			,[CategoryID]
			,[StudentID]
			)
			VALUES(@rating
			,@categoryID
			,@studentID)
	END
END
GO


EXEC performance.sp_insertFinalRating 2,2,2

select * from performance.ratingData


