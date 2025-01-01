import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { comparisonData } from '@/data/data';
import Card from '@/components/ui/Card';

export default function ComparisonChart() {
  return (
    <Card>
      <h3 className="text-gray-600 mb-4">VS PAST PERIOD</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={comparisonData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0F766E" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}