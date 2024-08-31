import { KpiCard } from "@Components/ReviewComponents/kpiDashboard";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const ReviewPage = () => {
    return (
        <div>
            <KpiCard
                title="Revenue"
                percentage="12%"
                price="$50,846.90"
                color="red"
                icon={
                    <ChevronDownIcon
                        strokeWidth={4}
                        className="w-3 h-3 text-red-500"
                    />
                }
            />
            <KpiCard
                title="Revenue"
                percentage="12%"
                price="$50,846.90"
                color="red"
                icon={
                    <ChevronDownIcon
                        strokeWidth={4}
                        className="w-3 h-3 text-red-500"
                    />
                }
            />
            <KpiCard
                title="Revenue"
                percentage="12%"
                price="$50,846.90"
                color="red"
                icon={
                    <ChevronDownIcon
                        strokeWidth={4}
                        className="w-3 h-3 text-red-500"
                    />
                }
            />

            <KpiCard
                title="Revenue"
                percentage="12%"
                price="$50,846.90"
                color="red"
                icon={
                    <ChevronDownIcon
                        strokeWidth={4}
                        className="w-3 h-3 text-red-500"
                    />
                }
            />

        </div>
    )
}

export default ReviewPage