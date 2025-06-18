export default function ProjectCardSkeleton() {
  return (
    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-6 animate-pulse" style={{ minHeight: '400px' }}>
      {/* Type badge skeleton */}
      <div className="w-20 h-6 bg-[#1a1a1a] rounded-md mb-3"></div>
      
      {/* Title skeleton */}
      <div className="flex justify-between items-start mb-3">
        <div className="w-3/4 h-6 bg-[#1a1a1a] rounded"></div>
        <div className="w-4 h-4 bg-[#1a1a1a] rounded"></div>
      </div>
      
      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="w-full h-4 bg-[#1a1a1a] rounded"></div>
        <div className="w-full h-4 bg-[#1a1a1a] rounded"></div>
        <div className="w-2/3 h-4 bg-[#1a1a1a] rounded"></div>
      </div>
      
      {/* Results skeleton */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-[#1a1a1a] rounded"></div>
          <div className="w-16 h-4 bg-[#1a1a1a] rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="h-8 bg-[#1a1a1a] rounded-md"></div>
          <div className="h-8 bg-[#1a1a1a] rounded-md"></div>
          <div className="h-8 bg-[#1a1a1a] rounded-md"></div>
          <div className="h-8 bg-[#1a1a1a] rounded-md"></div>
        </div>
      </div>
      
      {/* Tags skeleton */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="w-16 h-6 bg-[#1a1a1a] rounded-md"></div>
        <div className="w-20 h-6 bg-[#1a1a1a] rounded-md"></div>
        <div className="w-14 h-6 bg-[#1a1a1a] rounded-md"></div>
        <div className="w-18 h-6 bg-[#1a1a1a] rounded-md"></div>
      </div>
    </div>
  )
} 