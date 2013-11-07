require 'redcarpet'

Spree::Product.class_eval do
  def description_html
    if defined?(desc) && desc.present?
 		desc
 	else
 		'This Product has no description'
 	end

    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    markdown.render(desc)
  end
end
