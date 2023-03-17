USE [PerformanceAnalysis]
GO

/****** Object:  StoredProcedure [performance].[sp_validParentUserName]   Script Date: 2/3/2023 11:36:51 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [performance].[sp_validParentUserName]
	@userName varchar(500)

AS
BEGIN
	--SELECT p.slug WHEN count(distinct slug)=count(slug) from table [blog].posts as p;
	SELECT CASE WHEN 
	(NOT EXISTS (SELECT userName from performance.parent.userName where @userName=@userName))
	THEN 1
	ELSE 0
	END AS validUserName
END
GO


