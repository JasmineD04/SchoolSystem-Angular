USE [PerformanceAnalysis]
GO

/****** Object:  StoredProcedure [performance].[sp_registerTeacher]    Script Date: 2/3/2023 7:32:03 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



ALTER PROCEDURE [performance].[sp_registerTeacher]
	@firstName varchar(500),
	@lastName  varchar(500),
	@userName  varchar(500),
	@email  varchar(500),
	@division varchar(50),
	@gender varchar(500),
	@password  nvarchar(max)
AS
BEGIN
	INSERT into [performance].[teacher]
	([firstName]
	,[lastName]
	,[userName]
	,[email]
	,[division]
	,[gender]
	,[password])
	Values(@firstName
	,@lastName
	,@userName
	,@email
	,@division
	,@gender
	,HASHBYTES('SHA2_512',@password)
	)
END
GO


