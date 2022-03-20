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