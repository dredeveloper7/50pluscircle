import Link from "next/link"

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-green-700">Cookies Policy</h1>
        <p className="mb-4 text-gray-700">
          This Cookies Policy explains how 50pluscircle ("we", "us", or "our") uses cookies and similar technologies when you visit our website.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">What Are Cookies?</h2>
          <p className="text-gray-700">
            Cookies are small text files stored on your device by your web browser. They help websites remember information about your visit, such as your preferences and settings.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">How We Use Cookies</h2>
          <p className="text-gray-700">
            We use cookies to:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Enhance your browsing experience</li>
            <li>Understand how you use our website</li>
            <li>Remember your preferences and settings</li>
            <li>Enable essential site functionality</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">Types of Cookies We Use</h2>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li><span className="font-medium">Essential Cookies:</span> Necessary for the website to function properly.</li>
            <li><span className="font-medium">Performance Cookies:</span> Help us understand how visitors interact with our site.</li>
            <li><span className="font-medium">Functionality Cookies:</span> Remember your preferences and choices.</li>
            <li><span className="font-medium">Analytics Cookies:</span> Collect information to help us improve our services.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">Managing Cookies</h2>
          <p className="text-gray-700">
            You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our Cookies Policy, please <Link href="/faq" className="text-green-600 underline">contact us</Link>.
          </p>
        </section>
        <div className="mt-8">
          <Link href="/" className="text-green-700 hover:underline">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  )
} 