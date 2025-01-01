import { FaChartLine, FaShoppingCart, FaPercent, FaDollarSign } from 'react-icons/fa'
import Card from '@/components/ui/Card'

interface StatsCardProps {
  title: string
  value: string | number
  change: number
  type: 'increase' | 'decrease'
}

export default function StatsCard({ title, value, change, type }: StatsCardProps) {
  const getIcon = (title: string) => {
    switch (title) {
      case 'CONSULTATIONS': return FaChartLine
      case 'ORDERS PLACED': return FaShoppingCart
      case 'CONVERSION': return FaPercent
      default: return FaDollarSign
    }
  }

  const Icon = getIcon(title)

  return (
    <Card>
      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <Icon className="text-gray-400" />
        <span>{title}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <span className={type === 'increase' ? 'text-green-500' : 'text-red-500'}>
          {change}% {type}
        </span>
      </div>
    </Card>
  )
}
