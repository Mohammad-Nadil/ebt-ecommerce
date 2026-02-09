import React from 'react';
import {
  Home,
  User,
  Watch,
  Shirt,
  Baby,
  Gamepad2,
  ShoppingBasket,
  Sofa,
  Users,
  Wrench,
  ShoppingBag,
  Gem,
  Calendar,
  BookOpen,
  Package,
  ChevronRight,
} from 'lucide-react';

const Category = () => {
  const categories = [
    {
      icon: <Home className="w-5 h-5"  />,
      label: 'Health & Household',
    },
    {
      icon: <Baby className="w-5 h-5" />,
      label: 'Kids Fashion',
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      label: 'Toys',
    },
    {
      icon: <ShoppingBasket className="w-5 h-5" />,
      label: 'Groceries',
    },
    {
      icon: <Sofa className="w-5 h-5" />,
      label: 'Home & Lifestyle',
    },
    {
      icon: <Shirt className="w-5 h-5" />,
      label: 'Men Fashion',
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Women's Fashion",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: 'Stationary & Books',
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      label: 'Leather Goods',
    },
    {
      icon: <Gem className="w-5 h-5" />,
      label: 'Jewelleries',
    },
    {
      icon: <Watch className="w-5 h-5" />,
      label: 'Watches',
    },
    {
      icon: <User className="w-5 h-5" />,
      label: 'Men Fashion',
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      label: 'Tools & Hardware',
    },
    {
      icon: <Package className="w-5 h-5" />,
      label: 'Pet Supplies',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Seasonal',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Category</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div className="text-blue-500 group-hover:text-blue-600">
                {category.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {category.label}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;