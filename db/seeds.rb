Category.create!([{ name: 'Футболки' }, { name: 'Сумки' }, { name: 'Винил' }])

categories = Category.all

50.times do
  Product.create!(name: Faker::Name.name, category: categories.sample)
end
