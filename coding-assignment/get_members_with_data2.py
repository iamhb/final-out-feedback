import data2

def get_members(team):
    membersOfTeam=[] # declaration of return value
    for directMembers in team.members:
        if(directMembers.is_team): #if its a team, then breaking down the team
            for indirectMembers in directMembers.members:
                membersOfTeam.append(indirectMembers)
        else: #if its not a team, then append
            membersOfTeam.append(directMembers)
    return membersOfTeam

print sorted(p.displayname for p in get_members(data2.c_team))
