import Link from "next/link";
import {
  RocketIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Product: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/integrations", label: "Integrations" },
    ],
    Company: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Blog" },
    ],
    Resources: [
      { href: "/docs", label: "Documentation" },
      { href: "/support", label: "Support" },
      { href: "/community", label: "Community" },
    ],
    Legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
    ],
  };

  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <RocketIcon className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-800">InstaAI</span>
            </div>
            <p className="text-gray-600 mb-6">
              Revolutionizing Instagram marketing with AI-powered messaging and
              analytics.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-purple-600">
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600">
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600">
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600">
                <GithubIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-800 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} InstaAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
