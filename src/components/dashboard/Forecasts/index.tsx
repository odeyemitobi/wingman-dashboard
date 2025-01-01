import Card from '@/components/ui/Card';

export default function Forecasts() {
  return (
    <Card className="bg-emerald-500 text-white">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">+15%</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17l9-9M16 17V8H7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm">forecasted increase in your sales closed by the end of the current month</p>
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">+20%</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17l9-9M16 17V8H7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm">forecasted increase in consultations by the end of the current month</p>
        </div>
      </div>
    </Card>
  );
}