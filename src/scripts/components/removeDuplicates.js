/* Remove Duplicates Helper*/

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
}

export default removeDuplicates;