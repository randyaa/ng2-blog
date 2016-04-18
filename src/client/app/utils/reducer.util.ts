export const mergeArrays = (objectValue, sourceValue:any) => {
    //handle changes to the result array under a entity type, i.e. entities.frameworks.result
    let isObjectValueAnArray = Array.isArray(objectValue);
    if (isObjectValueAnArray && !Array.isArray(sourceValue)) {
        let indexInArray;
        if (typeof sourceValue === "string") {
            indexInArray = objectValue.indexOf(sourceValue);
            if (indexInArray  === -1) {
                //create
                return [...objectValue, sourceValue];
            } else {
                //update or delete
                //@todo need to handle deletes
                return objectValue;
            }
        } else {
            //object, check by ids
            indexInArray = objectValue.findIndex( (o:any) => {
                return o.id === sourceValue.id;
            });
            if (indexInArray === -1) {
                //create
                return [...objectValue, sourceValue];
            } else {
                //update or delete
                //@todo need to handle deletes
                return objectValue.slice(0, indexInArray).concat(sourceValue, objectValue.slice(indexInArray + 1));
            }
        }
    } else if (isObjectValueAnArray) {
        //Both are arrays, return the new array
        return sourceValue;
    }
};
