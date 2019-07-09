# Task 1 and Task 2 done in this file
import data2

def exercise1(givenName, people):
    outputTeam=[] #declaration of return value
    totalPeople=len(people) #insted of calling len() for every iteration, 'totalPeople' will be used
   
    for index in range(totalPeople):
        if(people[index].is_team): # using only teams from 'data2.people'
            team = people[index] # assigning to variable 'team'

            for members in team.members: # access members of team
                if members.is_team: # checking if member of a team is already a team
                    innerteam = members # if true assuming that member as 'innerteam'

                    for x in innerteam.members: # accessing members of innerteam
                        if x.displayname in givenName.displayname: 
                            outputTeam.append(team) 

                elif members.displayname in givenName.displayname: 
                    outputTeam.append(team)
    return outputTeam

print [t.displayname for t in exercise1(data2.alice, data2.people)]
