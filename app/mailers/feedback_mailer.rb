# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class FeedbackMailer < ActionMailer::Base
  default :from => "feedback@flexicon.org"
  
  def feedback(user, info, product)
    @user = user
    @info = info
    @prod = product
    mail(:to => "iCyber@mitre.org", :subject => "#{product} Feedback")
  end
end
