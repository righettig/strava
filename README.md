# strava
A clone of the popular Strava / Garmin Connect apps

Sample App: a Garmin Connect / Strava clone
-------------------------------------------
1) Activities managements
	an activity is defined as
		id
		name
		description
		creation date
		category
		subcategory
		icon
			
	it should be possible to list all of the user's activities
		it should be possible to filter by date range / category
			throttling when searching | some more advances rxjs operator
			property bag to store component params (activeFilters)
		
	it should be possible for the user to enter a new activity
	it should be possible for the user to amend a previously inserted activity
		confirmation message if there are any pending unsaved changes
		form validation when inserting/amending
	
	it should be possible for the user to delete a previously inserted activity

	it should be possible to see the details of an activity by typing the activityId in the
		browser's url

	Must have a chart / grid?	
		display bar chart related to KM split
		display line chart with # activity by month

AppModule
RoutingModule
SharedModule
ActivitiesModule

Login / AuthModule
	save to localStorage (service)
	
Docker / unit testing / PWA
		
Frontend
	angular / react / simple mobile (Ionic) 
	
Showcase NgBootstrap / Bootstrap or re-use one of my 2 app templates

Modules Lazy-loading	

Server-side rendering / AOT?
	
Save to db (Node / C#)
	NoSQL database (MongoDb?)

agm to use google maps / path

Additional features
===================
2) Manage friends (add / remove friends)

3) Third party apps (similar to garmin IQ)
	star rating
