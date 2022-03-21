-- This example will produce a list of all members who have used a tennis court
-- output: name of the court, name of the members

-- This example uses the || operator to concatenate strings

SELECT DISTINCT 
	mems.firstname || ' ' || mems.surname AS member,
	fac.name AS facility
FROM cd.members mems
	INNER JOIN cd.bookings bks
		ON mems.memid = bks.memid
	INNER JOIN cd.facilities fac
		ON fac.facid = bks.facid
WHERE
	fac.name LIKE '%Tennis Court%'
ORDER BY member, facility;