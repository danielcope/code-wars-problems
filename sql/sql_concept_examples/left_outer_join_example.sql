-- This will produce a list of all members and the people who recommended them

SELECT 
	mems.firstname AS memfname, 
	mems.surname AS memsname, 
	recs.firstname AS recfname, 
	recs.surname AS recsname
FROM cd.members mems
	LEFT OUTER JOIN cd.members recs
		ON recs.memid = mems.recommendedby
ORDER BY memsname, memfname;