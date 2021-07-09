import json
import datetime
import sys

def GetExistingData(filePath):
    with open(filePath, 'r') as infile:
        data = json.load(infile)
        return data

def WriteToJSONFile(data, filePath):
    with open(filePath, 'w') as outfile:
        json.dump(data, outfile)

def FindMonthIndex(data, month):
    for i in range(len(data['entries'])):
        if data['entries'][i][month] != None:
            return i

def FindDayIndex(data, day):
    for i in range(len(data)):
        if data[monthStr][day] != None:
            return i

def GetDateStrings():
    y = datetime.date.today().year
    m = str(y) + '.' + str(datetime.date.today().month)
    d = m + '.' + str(datetime.date.today().day)
    return m, d

newData = sys.argv[1]
data = GetExistingData('C:\\Users\\dkruggel\\repos\\standup-notes\\src\\Assets\\db.json')
monthStr, dayStr = GetDateStrings()

print(data['entries'][FindMonthIndex(data, monthStr)][monthStr][dayStr])
# WriteToJSONFile(data, 'C:\\Users\\dkruggel\\repos\\standup-notes\\src\\Assets\\db.json')