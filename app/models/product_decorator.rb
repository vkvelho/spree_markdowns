require 'redcarpet'

Spree::Product.class_eval do
  def description_html
    desc = description.empty? ? 'This product has no description' : description
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    markdown.render(desc)
  end
end
