-- This will produce a list of start times for bookings by members named 'David Farrell'

SELECT bks.starttime
FROM cd.members mems
INNER JOIN cd.bookings bks
    ON bks.memid = mems.memid
WHERE 
	mems.firstname = 'David' AND
	mems.surname = 'Farrell';


-- ============================
-- This is another inner join example.
-- This will produce a list of start times for tennis courts for the date of '2012-09-21'. It is also ordered by startime.
--  The query also uses aliases.

SELECT bks.starttime AS start, fac.name
FROM cd.facilities fac
INNER JOIN cd.bookings bks
	on bks.facid = fac.facid
WHERE 
	fac.name LIKE '%Tennis Court%' AND
	bks.starttime >= '2012-09-21' AND
	bks.starttime < '2012-09-22'
ORDER BY bks.starttime;

--==============================================
-- This will producer a list of ALL members who have recommended another member.
-- It will not have duplicates and the results will be ordered by surname, firstname

-- This example is interesting. It is an inner join used on ONE table. innerjoinseption. Because the recommended by is a reference to a memid that is in the same table, this is possible.  

SELECT DISTINCT recs.firstname AS firstname, recs.surname AS surname
FROM cd.members mems
	INNER JOIN cd.members recs
		ON recs.memid = mems.recommendedby
ORDER BY surname, firstname;