import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const LOGO_URL = `${SITE_URL}/calaboca-dark.png`;

type WelcomeEmailProps = {
  email?: string;
};

const FG = "#000000";
const YELLOW = "#FFD60A";
const MUTED = "#6b6b6b";
const HAIRLINE = "rgba(0,0,0,0.08)";

const forceLightCss = `
  :root {
    color-scheme: light only;
    supported-color-schemes: light only;
  }
`;

export default function WelcomeEmail({ email }: WelcomeEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
        <style dangerouslySetInnerHTML={{ __html: forceLightCss }} />
      </Head>
      <Preview>You&apos;re on the Calaboca waitlist — we&apos;ll be in touch.</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={badgeRow} align="center">
            <Text style={badge}>
              <span style={badgeDot} />
              In Early Access
            </Text>
          </Section>

          <Img
            src={LOGO_URL}
            alt="Calaboca"
            width="240"
            style={logoImg}
          />

          <Text style={tagline}>Explore local spots around you.</Text>

          <div style={divider} />

          <Text style={lead}>Welcome aboard.</Text>

          <Text style={paragraph}>
            You&apos;re officially on the waitlist. We&apos;re building a warmer, more
            human way to discover the places worth your time — the corner spots, the
            quiet gems, the ones your city actually talks about.
          </Text>

          <Section style={listSection}>
            <Row>
              <Text style={listItem}>
                <span style={listNum}>01</span>
                <span style={listText}>
                  We&apos;ll email you the moment early access opens.
                </span>
              </Text>
            </Row>
            <Row>
              <Text style={listItem}>
                <span style={listNum}>02</span>
                <span style={listText}>No spam. No marketing blasts. Just the launch.</span>
              </Text>
            </Row>
            <Row>
              <Text style={listItem}>
                <span style={listNum}>03</span>
                <span style={listText}>
                  First in gets first pick of our founding city list.
                </span>
              </Text>
            </Row>
          </Section>

          <div style={divider} />

          <Text style={footerTop}>
            Sent to <span style={footerEmail}>{email ?? "you"}</span> from{" "}
            <Link href="https://calaboca.com" style={footerLink}>
              calaboca.com
            </Link>
          </Text>
          <Text style={footerBottom}>
            This is a no-reply address. Replies aren&apos;t monitored.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

WelcomeEmail.PreviewProps = {
  email: "you@example.com",
} satisfies WelcomeEmailProps;

const body: React.CSSProperties = {
  backgroundColor: "#ffffff",
  margin: 0,
  padding: "56px 24px 40px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  color: FG,
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  textAlign: "center",
};

const badgeRow: React.CSSProperties = {
  marginBottom: "28px",
};

const badge: React.CSSProperties = {
  display: "inline-block",
  padding: "6px 14px",
  borderRadius: "9999px",
  border: `1px solid ${HAIRLINE}`,
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "0.01em",
  color: FG,
  margin: 0,
  lineHeight: 1,
};

const badgeDot: React.CSSProperties = {
  display: "inline-block",
  width: "7px",
  height: "7px",
  borderRadius: "9999px",
  backgroundColor: YELLOW,
  marginRight: "8px",
  verticalAlign: "middle",
};

const logoImg: React.CSSProperties = {
  display: "block",
  margin: "0 auto 14px",
  height: "auto",
};

const tagline: React.CSSProperties = {
  fontSize: "16px",
  color: MUTED,
  margin: "0 0 40px",
};

const divider: React.CSSProperties = {
  height: "1px",
  backgroundColor: HAIRLINE,
  margin: "0 auto 32px",
  width: "40px",
};

const lead: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 600,
  letterSpacing: "-0.01em",
  color: FG,
  margin: "0 0 16px",
  textAlign: "left",
};

const paragraph: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.65",
  color: FG,
  margin: "0 0 32px",
  textAlign: "left",
};

const listSection: React.CSSProperties = {
  margin: "0 0 40px",
};

const listItem: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.55",
  color: FG,
  margin: "0 0 12px",
  textAlign: "left",
};

const listNum: React.CSSProperties = {
  display: "inline-block",
  width: "32px",
  color: MUTED,
  fontVariantNumeric: "tabular-nums",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.04em",
};

const listText: React.CSSProperties = {
  color: FG,
};

const footerTop: React.CSSProperties = {
  fontSize: "13px",
  color: MUTED,
  margin: "0 0 4px",
};

const footerEmail: React.CSSProperties = {
  color: FG,
};

const footerLink: React.CSSProperties = {
  color: FG,
  textDecoration: "underline",
};

const footerBottom: React.CSSProperties = {
  fontSize: "12px",
  color: MUTED,
  margin: 0,
};
