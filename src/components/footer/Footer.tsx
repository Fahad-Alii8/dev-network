export default function Footer() {
  return (
    <footer className="py-6 mt-10 bg-gray-100 dark:bg-gray-100">
      <div className="container mx-auto text-center">
        <p className="text-black dark:text-white text-sm">
          &copy; {new Date().getFullYear()} Dev Network. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
