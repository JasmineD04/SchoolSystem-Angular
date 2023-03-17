CREATE PROCEDURE [performance].[sp_fetchCategories]

AS
BEGIN

	select 
	[CategoryID],
	[CategoryName]
	from [performance].[category]
	where ActiveYN=1;

END
GO

