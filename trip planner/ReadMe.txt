Planning and successfully executing a trip requires a lot of collabration. For this one needs to use different apps both before and during the trip. 
Here, we have provided a single web-application that combines all the most essential features needed for a trip. These include
1) Location - A map which shows the current location of all users. The map can also show the location of hotels and places to be visited. Through this you can not only keep a track of where your friends are but also where you have to visit
2) Memory Wall - A centralised place to upload pictures and cherish the memories of the trip. It is a highlight reel of the trip. This platform can be used to share photos also. 
3) Itinerary - A place to plan the trip, as tasks are completed they can be crossed off from the list. This makes it much more convenient to plan the trip.
4) Bill - A place to update the dues among the group. It simplifies the payments to be made and reduces the burden to remeber who has to pay whom.
5) Music - A place where people can update a collabrated playlist and enjoy music throughout their trip.

The user begins by logging into the app. Firebase is used to authenticate these logins. Once the user logs in he is presented to the main screen where the following features have ben implemented as follows: -
1) Location - Google maps API is used to embed maps. Live locations oof users can be added. We have used dummy users to represent the other users.
2) Memory Wall - Firebase database is used to store the images. The images are presented through basic react code.
3) Itineray - Basic HTML has been used to implement this feature.
4) Bill - While the bill splitting mechanism currently implemented is quite a basic one, we planned on implementing a more advanced version that presents the final dues and also supports unequal distribution but this could not be achieved due to lack of time.
5) Music - Spotify web-api was embedded for a dummy album. This album can be replaced by another album by the user which can be shared by the group. 
 
 To run the app:
 1. run "npm start" in the terminal.
 2. Open "login.html" file.