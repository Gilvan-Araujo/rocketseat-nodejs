interface meal {
  id: string
  name: string
  description: string
  date: string
  isDiet: boolean
  user_id: string
}

export const getBestStreakOfMealsInDiet = (meals: Array<meal>): number => {
  let bestStreak = 0
  let currentStreak = 0

  meals.forEach((meal) => {
    if (meal.isDiet) {
      currentStreak++
    } else {
      currentStreak = 0
    }

    if (currentStreak > bestStreak) {
      bestStreak = currentStreak
    }
  })

  return bestStreak
}
