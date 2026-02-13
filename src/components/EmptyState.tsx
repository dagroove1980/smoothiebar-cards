import { Leaf } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export default function EmptyState({
  title = 'No smoothies found',
  message = "Try adjusting your filters to discover more recipes.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div
        className="flex items-center justify-center mb-4"
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          backgroundColor: 'rgba(76, 175, 80, 0.08)',
        }}
      >
        <Leaf size={28} style={{ color: '#4CAF50' }} />
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-secondary max-w-sm">{message}</p>
    </div>
  );
}
