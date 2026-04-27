class Builders::ResumeHelpers < SiteBuilder
  ACCENTS = {
    "orange" => "#c25b2c",
    "olive"  => "#6b6a3a",
    "clay"   => "#a85a3d",
    "ink"    => "#2a2620",
  }.freeze

  def build
    helper :accent_hex do |name|
      ACCENTS[name.to_s] || (name.to_s.start_with?("#") ? name.to_s : ACCENTS["clay"])
    end

    helper :emph do |text|
      escaped = Bridgetown::Utils.xml_escape(text.to_s)
      escaped.gsub(/\*([^*]+)\*/) { "<em>#{Regexp.last_match(1)}</em>" }.html_safe
    end
  end
end
