
# date = time.today
# if date found in read(tweetLogs.dat)
# exit(0)

def tweet():
    
    print("Tweeted")

print("Description - ")
desc = input()

print("Source - ")
src = input().trim()

if src.startsWith("!g"):
    src = "https://github.com/AdityaGupta150/" + src.substr(2).trim()
    desc = desc + "\n\n#SourceCode -> " + src

tweet(desc)