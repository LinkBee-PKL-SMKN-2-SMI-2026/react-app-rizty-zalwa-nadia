interface EmployeeProps {
  name: string;
  role: string;
  department: string;
  isActive: boolean;
}

export default function EmployeeCard({ name, role, department, isActive }: EmployeeProps) {
  // Mapping warna border per departemen (Hints dari modul)
  const departmentColors: Record<string, string> = {
    "IT": "border-blue-500",
    "HR": "border-pink-500",
    "Finance": "border-green-500",
    "Marketing": "border-purple-500",
    "Operations": "border-orange-500",
  };

  // Fallback border jika departemen tidak terdaftar di mapping
  const borderClass = departmentColors[department] || "border-gray-300";

  return (
    <div className={`border-2 ${borderClass} p-4 rounded-lg shadow-md bg-white`}>
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
          {department}
        </span>
      </div>
      <p className="text-gray-600 mb-3">{role}</p>

      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
        isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}>
        {isActive ? 'Aktif' : 'Non-Aktif'}
      </span>
    </div>
  );
}
