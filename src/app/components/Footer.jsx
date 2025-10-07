export default function Footer() {
  return (
    <footer className="bg-[#3d2e7c] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} ARULA for Autism. All rights reserved.
        </p>
        <p className="mt-2 text-gray-300">
          Empowering families, transforming lives.
        </p>
      </div>
    </footer>
  )
}