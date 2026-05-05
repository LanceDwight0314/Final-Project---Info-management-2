// Inside your SalesListPage component
const { isSuperAdmin, isAdmin, SALES_DEL } = useRights();

// ... inside the table mapping ...
<td className="flex items-center gap-2 justify-end">
  {/* View Button - Everyone sees this */}
  <button className="btn-ghost btn-sm" title="View">
    <EyeIcon className="w-4 h-4" />
  </button>

  {/* Soft-Delete Button - Only for Superadmins or those with SALES_DEL right */}
  {(SALES_DEL === 1 || isSuperAdmin) && s.record_status === 'ACTIVE' && (
    <button 
      className="btn-ghost btn-sm text-red-500 hover:bg-red-50" 
      title="Delete"
      onClick={() => setDelTarget(s)}
    >
      <TrashIcon className="w-4 h-4" />
    </button>
  )}
</td>