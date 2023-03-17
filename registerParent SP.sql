USE [PerformanceAnalysis]
GO

/****** Object:  StoredProcedure [performance].[sp_registerParent]    Script Date: 2/3/2023 7:30:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



ALTER PROCEDURE [performance].[sp_registerParent]
	@firstName varchar(500),
	@lastName  varchar(500),
	@userName  varchar(500),
	@email  varchar(500),
	@division varchar(50),
	@rollNo int,
	@password  nvarchar(max)
AS
BEGIN
	INSERT into [performance].[parent]
	([firstName]
	,[lastName]
	,[userName]
	,[email]
	,[division]
	,[rollNo]
	,[password])
	Values(@firstName
	,@lastName
	,@userName
	,@email
	,@division
	,@rollNo
	,HASHBYTES('SHA2_512',@password)
	)
END
GO


