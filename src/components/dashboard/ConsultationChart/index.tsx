import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { consultationData } from "@/data/data";
import Card from "@/components/ui/Card";

export default function ConsultationsChart() {
  return (
    <Card>
      <h3 className="text-gray-600 mb-4">CONSULTATIONS</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={consultationData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="incoming"
              stroke="#8884d8"
              name="Incoming"
            />
            <Line
              type="monotone"
              dataKey="answered"
              stroke="#82ca9d"
              name="Answered"
            />
            <Line
              type="monotone"
              dataKey="expertsOnline"
              stroke="#ffc658"
              name="Experts Online"
              strokeDasharray="3 3"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
