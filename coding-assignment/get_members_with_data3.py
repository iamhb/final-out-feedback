# Here, I tried this concept with recursion but failed. So changed the concept for working
# Recursion results in maximum recursion depth exceeded
#failed recursion concept
# def get_members(team):
#         membersOfTeam=[]
#         for members in team.members: #accessing members of team
#                 if(not(members.is_team): #if member is not a team
#                         membersOfTeam.append(members)
#                 else: #if it is a team
#                         get_members(members)
                        
#working concept
import data3

def get_members(team):
        membersOfTeam=[] #declaration of return value
        for cMembers in team.members: # accessing members of c_team
                if(not(cMembers.is_team)): # if its not a team
                        membersOfTeam.append(cMembers)
                else:
                        for aMembers in cMembers.members: # accessing members of a_team 
                                if(not(aMembers.is_team)): # if its not a team
                                        membersOfTeam.append(aMembers)
                                else:
                                        for bMembers in aMembers.members: # accessing members of b_team
                                                if(not(bMembers.is_team)): # if its not a team
                                                        membersOfTeam.append(bMembers)
        return membersOfTeam
print sorted(p.displayname for p in get_members(data3.c_team))

