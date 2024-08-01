const sortByDate = (first, second) => {
  const datePrev = new Date(first.date)
  const dateNext = new Date(second.date)

  if (datePrev > dateNext) {
    return -1
  }

  if (datePrev < dateNext) {
    return 1
  }

  return 0
}

const sortByUpvotes = (first, second) => {
    if (first.upvotes > second.upvotes) {
      return -1
    }
    if (first.upvotes < second.upvotes) {
      return 1
    }

    return 0
}


export {
  sortByDate,
  sortByUpvotes
}

