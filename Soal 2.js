function pattern_count(words, selection) {
    let count = 0;
    if ((words.length < selection.length) || selection.length === 0) {
      return count
    }
    let idx = 0;
    const list_word = words.split('');
    const list_selection = selection.split('');
    const nextIdxCheck = list_selection[0] === list_selection[list_selection.length-1] ? list_selection.length-1 : list_selection.length;
    do {
      const sliced = list_word.slice(idx, selection.length+idx)
      if (sliced.join('') === selection) {
        count++;
      }
      idx+=nextIdxCheck;
    } while (idx <= list_word.length)

    return count;
}

  const check = pattern_count('abakadabra', 'ab')
  console.log(check)