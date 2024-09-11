def nonUniqueEle(data):
    returnArr = []

    for x in data:
        if data.count(x) > 1:
            returnArr.append(x)
            
    return returnArr

nonUniqueEle([-10, 9, 10, 10, 9, 8])



