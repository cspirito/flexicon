/*
 * NOTICE
 * 
 * This software was produced for the U. S. Government
 * under Contract No. FA8702-13-C-0001, and is
 * subject to the Rights in Noncommercial Computer Software
 * and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)
 *
 *  2013 The MITRE Corporation. All Rights Reserved.
*/
//
/*
* To activate a locale, it must be set in application.js by Locale name.
*/
FlexiconEmber.JA = {
	'home.title': "ホーム",
	'actions': "アクション",
	'feedback.send': "フィードバックを送る",
	'search': "検索",
	'search.empty': "検索文字列を探す...",
	'send': "送信",
	'cancel': "キャンセル",
	'hide': "隠す",
	'stats': {
		'karma': "Karma 統計",
		'karma.definition': "Karma 定義",
		'karma.comment': "Karma コメント",
		'submission': "送信の統計",
		'votes': "投票の統計",
		'votes.up': "上の投票",
		'votes.down': "下の投票",
		'votes.total': "投票の合計",
	},
	'user': {
		'title': "ユーザ",
		'login': "サインイン",
		'logout': "サインアウト",
		'signup': "登録",
		'profile': "ユーザプロフィール",
		'view': "プロフィール閲覧",
		'edit': "プロフィール変更",
		'account': "マイアカウント",
		'account.new': "新規アカウント",
		'name': "氏名",
		'email': "E-Mail",
		'jobtitle': "職業",
		'organization': "会社名",
		'phone': "電話番号 (仕事)",
		'password': "パスワード",
		'password.confirm': "パスワード (確認)"
		
	},
	'entry': {
		'new': "用語の追加",
		'random.view': "ランダムに用語を閲覧する",
		'title': "用語",
		'term': "用語",
		'found': "見つかった用語"
	},
	'definition': {
		'add': "定義の追加",
		'title': "定義"
	},
	'language': {
		'flexicon': "優先の言語",
		'preferred': "優先の言語",
		'title': "言語"
	},
	'artifact': {
		'title': "アーティファクト",
		'add': "アーティファクトの追加",
		'index': "使用例",
		'source': "情報源",
		'usage': "使用",
		'notes': "備考",
		'classification': "分類",
		'translation': "提案する変換法"
	},
	'comment': {
		'section': "コメントおよびディスカッション",
		'add': "コメントを追加",
		'requirement': "コメントを追加するには、サインインもしくは登録してください",
		'new': " による新しいコメント"
	}
};
if (Em.LOCALE == "ja") {
	Em.I18n.translations = FlexiconEmber.JA;
}
